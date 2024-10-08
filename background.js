chrome.action.onClicked.addListener(async (tab) => {
	config = { files: ["spp.js"], target: {tabId: tab.id}};

	chrome.scripting.executeScript(config);
})
