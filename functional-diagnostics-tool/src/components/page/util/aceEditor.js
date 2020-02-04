import React from 'react';
import { Component } from 'react';

// Ace C9 Editor
import ace from 'brace';
import 'brace/mode/java';
import modeJson from 'brace/mode/json';
import 'brace/theme/chrome';
import 'brace/theme/eclipse';
import 'brace/theme/cobalt';

export default class AceEditor extends Component {
  static onExpandEditor(editorName){
    var editor = ace.edit(editorName);
    editor.getSession().unfold();
  }
  static onCollapseEditor(editorName){
    var editor = ace.edit(editorName);
    editor.getSession().foldAll();
  }
  /*  @Theme
   *  Chrome
   *  Clouds
   *  Clouds Midnight
   *  Cobalt
   *  Crimson Editor
   *  Dawn
   *  Eclipse
   *  Idle Fingers
   *  Kr Theme
   *  Merbivore
   *  Merbivore Soft
   *  Mono Industrial
   *  Monokai
   *  Pastel On Dark
   *  Solarized Dark
   *  Solarized Light
   *  TextMate
   *  Tomorrow
   *  Tomorrow Night
   *  Tomorrow Night Blue
   *  Tomorrow Night Bright
   *  Tomorrow Night Eighties
   *  Twilight
   *  Vibrant Ink
   * https://docs.c9.io/docs/syntax-highlighting-themes
   */
  static createEditor(divId, theme, value) {
    var editor = ace.edit(divId);
    editor.$blockScrolling = Infinity;
    editor.getSession().setWrapLimitRange(15, 250);
    editor.getSession().setMode('ace/mode/json');
    editor.getSession().setUseWrapMode(true);
    editor.setTheme('ace/theme/' + theme);
    editor.setShowPrintMargin(false);
    editor.setValue(value);
    editor.getSession().foldAll(2, editor.getSession().getDocument().getLength());
    editor.clearSelection();
    editor.setOptions({
      minLines: 30
    });
  }
  render() {
    return (
      <div>
      </div>
    );
  }
}
