import {loadCSS, onLoadCSS} from 'fg-loadcss';
import {modules} from './utils/module-loader';
import emitter from './utils/emitter';
import resizer from './utils/resizer';
import scroller from './utils/scroller';

export default class App {
  constructor() {
    this.moduleInstances = this._getInstances();
    this.initialize();
  }

  initialize() {
    console.log('App initialized');
    this._bindEvents();
  }

  _bindEvents() {
    scroller.on('scroll', () => {
      emitter.fire('app--scroll');
    });

    resizer.on('resize', () => {
      emitter.fire('app--resizer');
    });

    emitter.on('get-instances', () => {
      this._getInstances();
    });
  }

  _getInstances() {
    return modules.map(module => {
      const elements = Array.from(document.querySelectorAll(module.class));
      const references = elements.map(el => {
        return new module.Source(el);
      });

      return {
        name: module.name,
        ref: references,
      };
    });
  }

  tearDown() {
    this.moduleInstances.forEach(item => {
      item.ref.forEach(ref => {
        if (ref.teardown) {
          ref.teardown();
        }
      });
    });
  }
}
