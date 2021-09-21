import React from 'react';
import EditorJS from '@editorjs/editorjs';
import List from '@editorjs/list';

export const Editor: React.FC = () => {
    React.useEffect(() => {
        const editor = new EditorJS({
            holder: 'editor',
            placeholder: 'Введите текст вашей статьи',
            tools: {
                list: {
                    class: List,
                    inlineToolbar: true
                }
            }
        });

        return () => {
            editor.isReady.then(() => {
                editor.destroy();
            })
                .catch(e => console.error('ERROR editor cleanup', e));
        }
    }, []);

    return (
        <div id="editor" />
    );
};
