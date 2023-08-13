
    function sliceText() {
      var inputText = document.getElementById("inputText").value;
      var slicedText = inputText.slice(0, 5); // Slicing the first 5 characters

      document.getElementById("output").innerText = slicedText;
    }
