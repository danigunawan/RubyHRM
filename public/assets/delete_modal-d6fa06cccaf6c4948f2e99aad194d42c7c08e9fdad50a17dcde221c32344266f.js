(function(){$.rails.allowAction=function(a){var d,n,o,l;return(o=a.data("confirm"))?(d=a.clone().removeAttr("class").removeAttr("data-confirm").addClass("btn").addClass("btn-danger").html("Confirm"),l='<div class="modal fade" id="myModal">\n  <div class="modal-dialog modal-sm">\n    <div class="modal-content">\n      <div class="modal-header">\n        <a class="close" data-dismiss="modal">\xd7</a>\n        <h3>'+o+'</h3>\n      </div>\n      <div class="modal-body">\n        <p>Note: This operation can not be undone.</p>\n      </div>\n      <div class="modal-footer">\n        <a data-dismiss="modal" class="btn btn-link">Cancel</a>\n      </div>\n    </div>\n  </div>\n</div>',n=$(l),n.find(".modal-footer").append(d),n.modal(),!1):!0}}).call(this);