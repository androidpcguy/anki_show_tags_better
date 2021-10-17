import aqt
from PyQt5 import QtWidgets

from aqt import gui_hooks
from aqt.webview import WebContent
from anki.notes import Note
from aqt import mw

config = mw.addonManager.getConfig(__name__)
show_at_bottom = f"{config['bottom']}"

# create class to store current tags
# on tags edited --> update tag cache locally --> hook to update tag display
# on note loaded --> update tag cahce locally --> hook to update tag display


def showTags(editor: aqt.editor.Editor):
    #print('in showTags python')

    curNote = editor.note

    tags: Note = None
    if curNote:
        tags = curNote.tags

    #print(type(tags))

    tags.insert(0, f"{show_at_bottom}")
    editor.web.eval(f"showTags({tags});")


def on_webview_will_set_content(web_content: WebContent, context):
    addon_package = aqt.mw.addonManager.addonFromModule(__name__)
    web_content.js.append(f"/_addons/{addon_package}/web/tags.js")
    web_content.css.append(f"/_addons/{addon_package}/web/tags.css")


gui_hooks.editor_did_load_note.append(showTags)
#gui_hooks.editor_did_update_tags.append(showTags)
gui_hooks.webview_will_set_content.append(on_webview_will_set_content)

aqt.mw.addonManager.setWebExports(__name__, r"web/.*(css|js)")
