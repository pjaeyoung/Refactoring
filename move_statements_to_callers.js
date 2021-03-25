// 리팩토링 전
function renderPerson(outStream, person) {
  outStream.write(`<p>${person.name}</p>`);
  renderPhoto(outStream, person.photo);
  emitPhotoData(outStream, person.photo);
}

function listRecentPhotos(outStream, photos) {
  photos
    .filter((p) => p.date > recentDateCutoff())
    .forEach((p) => {
      outStream.write("<div>\n");
      emitPhotoData(outStream, p);
      outStream.write("<div>\n");
    });
}

function emitPhotoData(outStream, aPhoto) {
  outStream.write(`<p>제목: ${aPhoto.title}</p>\n`);
  outStream.write(`<p>날짜: ${aPhoto.date.toDateString()}</p>\n`);
  outStream.write(`<p>위치: ${aPhoto.location}</p>\n`);
}
