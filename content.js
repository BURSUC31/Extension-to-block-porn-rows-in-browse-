const AnchorLinkPornUrl = 'browse.php?cat=7';

const visitedlinksContainer = document.getElementsByClassName('visitedlinks');

const torrentRowDivsCollection =
  visitedlinksContainer[0].getElementsByClassName('torrentrow');

for (let i = torrentRowDivsCollection.length - 1; i >= 0; i--) {
  const torrentLinks = torrentRowDivsCollection[i].getElementsByTagName('a');

  for (let j = 0; j < torrentLinks.length; j++) {
    const rowLinkAttribute = torrentLinks[j].getAttribute('href');
    if (rowLinkAttribute === AnchorLinkPornUrl) {
      torrentRowDivsCollection[i].remove();
      break; // Exit the inner loop since the row is removed
    }
  }
}
