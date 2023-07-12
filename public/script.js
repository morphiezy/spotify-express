async function addSong(song) {
  await fetch("http://localhost:3000/add-song", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: song,
  });

  window.alert(`${JSON.parse(song).song} added to playlist`);
  window.location.reload();
}

async function deleteSong(e, id) {
  const a = e.target.parentElement;
  a.addEventListener("click", (e) => e.preventDefault());

  await fetch(`http://localhost:3000/delete-song/${id}`, {
    method: "DELETE",
  });

  window.alert("Success Deleting From Playlist");
  window.location.reload();
}
