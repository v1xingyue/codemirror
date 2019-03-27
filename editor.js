(function(){

    var runningCodeServer = function(code){
        editor.setOption( 'readOnly' ,true );
        setTimeout(function(){
            var code_result = "Hello You Are Running From Server!";
            editor_result.setValue( (new Date()) + "\n" + code_result);
            editor.setOption( 'readOnly' ,false);
        },1000);
    }

    var editor_result = CodeMirror.fromTextArea(document.getElementById("code_result"),{
         theme: 'monokai-sublime',
         readOnly:true
    });
    
    var editor = CodeMirror.fromTextArea(document.getElementById("code"), {
        lineNumbers: true,     // 显示行数
        indentUnit: 4,         // 缩进单位为4
        styleActiveLine: true, // 当前行背景高亮
        matchBrackets: true,   // 括号匹配
        mode: "text/x-cython", // HMTL混合模式
        lineWrapping: true,    // 自动换行
        smartIndent:true,      // 自动缩进
        theme: 'monokai-sublime',
        autoCloseTags:true,
        autoCloseBrackets:true, // 自动闭合括号

        foldGutter: true,
        gutters:["CodeMirror-linenumbers", "CodeMirror-foldgutter"],

        allowDropFileTypes:[
           'text/x-python' 
        ]

    });

    editor.setOption("extraKeys", {
        // Tab键换成4个空格
        Tab: function(cm) {
            var spaces = Array(cm.getOption("indentUnit") + 1).join(" ");
            cm.replaceSelection(spaces);
        },
        // F11键切换全屏
        "Ctrl+F": function(cm) {
            cm.setOption("fullScreen", !cm.getOption("fullScreen"));
        },
        // Esc键退出全屏
        "Esc": function(cm) {
            if (cm.getOption("fullScreen")) cm.setOption("fullScreen", false);
        },
        "Ctrl-P":"autocomplete",
        "Ctrl-R":function(cm){
            var code = cm.getValue();
            runningCodeServer(code)
        }
    });

})();
