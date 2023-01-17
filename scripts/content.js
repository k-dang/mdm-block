// Twitch player looks to only be embeded once
let twitch_interval = setInterval(() => {
  const twitchEmbed = document.querySelector('div.twitch-container');
  console.log('Checking for twitch embed');

  if (twitchEmbed) {
    console.log('Removing twitch embed');
    twitchEmbed.remove();
    clearInterval(twitch_interval);
  }
}, 500);

// Stop looking after 10 seconds
setTimeout(() => {
  clearInterval(twitch_interval);
}, 10000)

// Handle modal constant refreshes
const targetNode = document.querySelector('div#svelte');

const config = { childList: true };

const callback = (mutationList) => {
  console.log('Checking for modal ad');
  for (const mutation of mutationList) {
    if (mutation.type === 'childList') {
      const adModal = document.querySelector(
        'div.modal.svelte-aeftzs.is-active.top'
      );
      if (adModal) {
        console.log('Removing modal ad');
        adModal.remove();
      }
    }
  }
};

const observer = new MutationObserver(callback);

// Start observing the target node
observer.observe(targetNode, config);
