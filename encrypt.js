function encryptText() {
    var textToEncrypt = document.getElementById("textToEncrypt").value;
    var encryptedText = "";

    var xhr = new XMLHttpRequest();
    xhr.open("GET", "szyfr.json", true);
    xhr.onreadystatechange = function () {
        if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
            var encryptionMapping = JSON.parse(xhr.responseText);

            for (var i = 0; i < textToEncrypt.length; i++) {
                var character = textToEncrypt[i];
                if (encryptionMapping.hasOwnProperty(character)) {
                    encryptedText += encryptionMapping[character];
                } else {
                    encryptedText += character;
                }
            }

            document.getElementById("encryptedText").value = encryptedText;
        }
    };
    xhr.send();
}
