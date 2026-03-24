document.getElementById('analyzeBtn').addEventListener('click', function() {
    const textInput = document.getElementById('textInput');
    const text = textInput.value;
    const resultDiv = document.getElementById('result');

    
    if (!text.trim()) {
        alert("Please enter some text to analyze.");
        resultDiv.style.display = "none";
        return;
    }
    const charCount = text.length;
    const words = text.trim().split(/\s+/);
    const wordCount = words.length;

    
    const reversedText = text.split("").reverse().join("");

    
    document.getElementById('charCount').innerText = charCount;
    document.getElementById('wordCount').innerText = wordCount;
    document.getElementById('reversedOutput').innerText = reversedText;


    resultDiv.style.display = "block";
});
