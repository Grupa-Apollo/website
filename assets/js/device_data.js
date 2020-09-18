var sourceforge = "https://sourceforge.net/projects/havoc-os/files/";
var updatedb = "https://raw.githubusercontent.com/Havoc-OS/OTA/ten";
function unixTime(unixtime) {
    var u = new Date(unixtime*1000);
      return u.getUTCFullYear() +
        '-' + ('0' + (u.getUTCMonth()+1)).slice(-2) +
        '-' + ('0' + u.getUTCDate()).slice(-2)
    };
var onPageLoad = function() {
  document.querySelectorAll("div[data-device]").forEach(el => {
    var devData = el.getAttribute("data-device");
    fetch(updatedb + "/" + "vanilla" + "/" + devData + ".json")
      .then(function (response) {
                return response.json();
            })
            .then(function (data) {
                appendData(data);
            })
            .catch(function (err) {
                console.log('error: ' + err);
            });
        function appendData(data) {
            var file = data.response[0].filename;
		          var oem = data.response[0].oem;		          
		          var name = data.response[0].name;
		          var codename = data.response[0].codename;
		          var version = data.response[0].version;
		          var romtype = data.response[0].rometype;
		          var maintainer = data.response[0].maintainer;
		          var dl = data.response[0].url;
		          var group = data.response[0].group;
		          var datetime = data.response[0].datetime;
		          var size = data.response[0].size;
		          var id = data.response[0].id;
		          el.getElementsByClassName("device-card")[0].innerHTML = `
		          <div class="card-body device-card">
    <div>
        <div class="card-header" style="color: #e2f3f5; font-weight: 700; background: #1a73e8;">
            ${name}
        </div>
    </div>
    <div class="row no-gutters">
        <div class="col-auto my-3">
            <img src="assets/img/devices/${codename}.png" class="img-fluid" width="85" alt="" />
        </div>
        <div class="col my-2">
            <p class="card-text" style="color: #263238;">
                <i class="fa fa-code" aria-hidden="true"></i> Codename: ${codename} <br />
                <i class="fa fa-check-circle" aria-hidden="true"></i> Build Date: ${unixTime(datetime)}
            </p>
            <div>
                <button type="button" class="btn btn-sm" data-toggle="modal" data-target="#${codename}Modal">Download Info</button>
                <div class="modal modal-fullscreen fade" id="${codename}Modal" tabindex="-1" aria-labelledby="${codename}ModalLabel" aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="${codename}ModalLabel"><b>${name}</b></h5>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div class="modal-body">
                                <img src="assets/img/devices/${codename}.png" class="img-fluid" width="180" alt="" />
                                <p class="card-text mt-3" style="color: #263238;">
                                    <i class="fa fa-building" aria-hidden="true"></i> <b>OEM</b> : ${oem} </br>
                                    <i class="fa fa-tablet" aria-hidden="true"></i> <b>Name</b> : ${name} </br>
                                    <i class="fa fa-code" aria-hidden="true"></i> <b>Codename</b> : ${codename} </br>
                                    <i class="fa fa-user-circle" aria-hidden="true"></i> <b>Maintainer</b> : ${maintainer} </br>
                                    <i class="fa fa-tags" aria-hidden="true"></i> <b>Version</b> : ${version} </br>
                                    <i class="fa fa-check-circle" aria-hidden="true"></i> <b>Build Date</b> : ${unixTime(datetime)} </br>
                                    <i class="fa fa-server" aria-hidden="true"></i> <b>Size</b> : ${(size/1048567).toFixed(2)} Mb </br>
                                </p>
                                <img src="https://img.shields.io/sourceforge/dt/Havoc-OS/${codename}/${file}.svg" class="mb-3" alt="data" /></br>
                                <a target="_blank" href="${dl}" type="button" class="btn text-white btn-sm mb-3" style="background: #1a73e8;"><i class="fa fa-download" aria-hidden="true"></i> Download</a></br>
                                <a target="_blank" href="${group}" type="button" class="btn text-white btn-sm" style="background: #0088cc;"><i class="fa fa-telegram" aria-hidden="true"></i> Telegram</a>
                                <a target="_blank" href="https://sourceforge.net/projects/havoc-os/files/${codename}/" type="button" class="btn text-white btn-sm" style="background: #263238;"><i class="fa fa-folder" aria-hidden="true"></i> Old Files</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>`;         
        }
  });
};

window.addEventListener("load", onPageLoad);
