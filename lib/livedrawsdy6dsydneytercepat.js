'use babel';

import Livedrawsdy6dsydneytercepatView from './livedrawsdy6dsydneytercepat-view';
import { CompositeDisposable } from 'atom';

export default {

  livedrawsdy6dsydneytercepatView: null,
  modalPanel: null,
  subscriptions: null,

  activate(state) {
    this.livedrawsdy6dsydneytercepatView = new Livedrawsdy6dsydneytercepatView(state.livedrawsdy6dsydneytercepatViewState);
    this.modalPanel = atom.workspace.addModalPanel({
      item: this.livedrawsdy6dsydneytercepatView.getElement(),
      visible: false
    });

    // Events subscribed to in atom's system can be easily cleaned up with a CompositeDisposable
    this.subscriptions = new CompositeDisposable();

    // Register command that toggles this view
    this.subscriptions.add(atom.commands.add('atom-workspace', {
      'livedrawsdy6dsydneytercepat:toggle': () => this.toggle()
    }));
  },

  deactivate() {
    this.modalPanel.destroy();
    this.subscriptions.dispose();
    this.livedrawsdy6dsydneytercepatView.destroy();
  },

  serialize() {
    return {
      livedrawsdy6dsydneytercepatViewState: this.livedrawsdy6dsydneytercepatView.serialize()
    };
  },

  toggle() {
    console.log('Livedrawsdy6dsydneytercepat was toggled!');
    return (
      this.modalPanel.isVisible() ?
      this.modalPanel.hide() :
      this.modalPanel.show()
    );
  }

};
