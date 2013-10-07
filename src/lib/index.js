var qrcode = new QRCode(document.getElementById("qrcode"), {
    width: 390,
    height: 390
});

function makeCode() {
    var elText = document.getElementById("text");

    if (!elText.value) {
        elText.focus();
        qrcode.makeCode(elText.value);
        return;
    }

    qrcode.makeCode(elText.value);
}

makeCode();

$("#text").
on("keyup", function (e) {
    makeCode();
});

var fs = require('fs');

function write(string, path){
    var elText = document.getElementById("text");
    var regex = /^data:.+\/(.+);base64,(.*)$/;
    var matches = string.match(regex);
    var ext = matches[1];
    var data = matches[2];
    var buffer = new Buffer(data, 'base64');
    fs.writeFileSync(path + elText.value + "." + ext, buffer);
}


$("#btn_save").click(function () {
    saveFileDialog('#fileDialog');
});

function saveFileDialog(name) {
    var chooser = $(name);
    chooser.change(function(evt) {
      var image = $('#qrcode').find('img')[0].src;
      var path = $(this).val();
      write(image, path);
    });
    
    chooser.trigger('click');
    
  }

shortcut.add("Ctrl+S",function() {
	saveFileDialog('#fileDialog');
});