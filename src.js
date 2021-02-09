const infoDiv = document.getElementById("info-div");
const textArea = document.getElementById("text");
const analyzeBtn = document.getElementById("analyze");

const analyzeText = () => {
	let inputText = textArea.value;

	const textLength = inputText.length;

	let paraCount = (inputText.match(/[\n]+/gi) || []).length + 1;

	let wordList = inputText
		.split(/[.| |\n]+/)
		.filter((char) => char.length != 0);
	let wordCount = wordList.length;

	let wordDict = {};
	for (let i = 0; i < wordList.length; i++) {
		let word = wordList[i].toLowerCase();
		wordDict[word] = 0;
	}
	for (let i = 0; i < wordList.length; i++) {
		let word = wordList[i].toLowerCase();
		wordDict[word]++;
	}

	let mostFreqWords = [],
		maxWordCount = 0;
	for (let key in wordDict) {
		var count = wordDict[key];
		if (count > maxWordCount) {
			maxWordCount = count;
		}
	}
	for (let key in wordDict) {
		var count = wordDict[key];
		if (count === maxWordCount) {
			mostFreqWords.push(key);
		}
	}

	let charDict = {};
	for (let i = 97; i <= 122; i++) {
		charDict[String.fromCharCode(i)] = 0;
	}

	let charCount = 0;
	for (let i = 0; i < wordList.length; i++) {
		let word = wordList[i].toLowerCase();
		for (let j = 0; j < word.length; j++) {
			charDict[word[j]]++;
			charCount++;
		}
	}

	let mostFreqChars = [],
		maxCharCount = 0;
	for (let key in charDict) {
		var count = charDict[key];
		if (count > maxCharCount) {
			maxCharCount = count;
		}
	}
	for (let key in charDict) {
		var count = charDict[key];
		if (count === maxCharCount) {
			mostFreqChars.push(key);
		}
	}

	if (textLength !== 0) {
		let wordCountDiv = infoDiv.children[1];
		wordCountDiv.children[0].textContent = wordCount;

		let charCountDiv = infoDiv.children[2];
		charCountDiv.children[0].textContent = charCount;

		let paraCountDiv = infoDiv.children[3];
		paraCountDiv.children[0].textContent = paraCount;

		let mostFreqCharsDiv = infoDiv.children[4];
		mostFreqCharsDiv.children[0].textContent = mostFreqChars.toString();

		let mostFreqWordsDiv = infoDiv.children[5];
		mostFreqWordsDiv.children[0].textContent = mostFreqWords.toString();
	}
};

analyzeBtn.addEventListener("click", analyzeText);
