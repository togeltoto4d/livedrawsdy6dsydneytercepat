'use babel';

import Livedrawsdy6dsydneytercepat from '../lib/livedrawsdy6dsydneytercepat';

// Use the command `window:run-package-specs` (cmd-alt-ctrl-p) to run specs.
//
// To run a specific `it` or `describe` block add an `f` to the front (e.g. `fit`
// or `fdescribe`). Remove the `f` to unfocus the block.

describe('Livedrawsdy6dsydneytercepat', () => {
  let workspaceElement, activationPromise;

  beforeEach(() => {
    workspaceElement = atom.views.getView(atom.workspace);
    activationPromise = atom.packages.activatePackage('livedrawsdy6dsydneytercepat');
  });

  describe('when the livedrawsdy6dsydneytercepat:toggle event is triggered', () => {
    it('hides and shows the modal panel', () => {
      // Before the activation event the view is not on the DOM, and no panel
      // has been created
      expect(workspaceElement.querySelector('.livedrawsdy6dsydneytercepat')).not.toExist();

      // This is an activation event, triggering it will cause the package to be
      // activated.
      atom.commands.dispatch(workspaceElement, 'livedrawsdy6dsydneytercepat:toggle');

      waitsForPromise(() => {
        return activationPromise;
      });

      runs(() => {
        expect(workspaceElement.querySelector('.livedrawsdy6dsydneytercepat')).toExist();

        let livedrawsdy6dsydneytercepatElement = workspaceElement.querySelector('.livedrawsdy6dsydneytercepat');
        expect(livedrawsdy6dsydneytercepatElement).toExist();

        let livedrawsdy6dsydneytercepatPanel = atom.workspace.panelForItem(livedrawsdy6dsydneytercepatElement);
        expect(livedrawsdy6dsydneytercepatPanel.isVisible()).toBe(true);
        atom.commands.dispatch(workspaceElement, 'livedrawsdy6dsydneytercepat:toggle');
        expect(livedrawsdy6dsydneytercepatPanel.isVisible()).toBe(false);
      });
    });

    it('hides and shows the view', () => {
      // This test shows you an integration test testing at the view level.

      // Attaching the workspaceElement to the DOM is required to allow the
      // `toBeVisible()` matchers to work. Anything testing visibility or focus
      // requires that the workspaceElement is on the DOM. Tests that attach the
      // workspaceElement to the DOM are generally slower than those off DOM.
      jasmine.attachToDOM(workspaceElement);

      expect(workspaceElement.querySelector('.livedrawsdy6dsydneytercepat')).not.toExist();

      // This is an activation event, triggering it causes the package to be
      // activated.
      atom.commands.dispatch(workspaceElement, 'livedrawsdy6dsydneytercepat:toggle');

      waitsForPromise(() => {
        return activationPromise;
      });

      runs(() => {
        // Now we can test for view visibility
        let livedrawsdy6dsydneytercepatElement = workspaceElement.querySelector('.livedrawsdy6dsydneytercepat');
        expect(livedrawsdy6dsydneytercepatElement).toBeVisible();
        atom.commands.dispatch(workspaceElement, 'livedrawsdy6dsydneytercepat:toggle');
        expect(livedrawsdy6dsydneytercepatElement).not.toBeVisible();
      });
    });
  });
});
