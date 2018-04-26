/*Assignment 16*/
/* Mapping the artist and release info from the album object into the appropriate fields in index.html.*/

{
  $('#album-title').text(album.title);
  $('img#album-cover-art').attr('src', 'assets/images/album_covers/01.png');
$("#release-info").text(album.releaseInfo);   //releaseInfo
$(".artist").text(album.artist);     //artist info
}
