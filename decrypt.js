function decryptText() {
    var textToDecrypt = document.getElementById("textToDecrypt").value;
    var decryptedText = "";

    var xhr = new XMLHttpRequest();
    xhr.open("GET", "szyfr.json", true);
    xhr.onreadystatechange = function () {
        if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
            var encryptionMapping = JSON.parse(xhr.responseText);

            for (var i = 0; i < textToDecrypt.length; i++) {
                var character = textToDecrypt[i];
                for (var key in encryptionMapping) {
                    if (encryptionMapping.hasOwnProperty(key) && encryptionMapping[key] === character) {
                        decryptedText += key;
                        break;
                    }
                }
                if (decryptedText.length === i) {
                    decryptedText += character;
                }
            }

            document.getElementById("decryptedText").value = decryptedText;
        }
    };
    xhr.send();
}
