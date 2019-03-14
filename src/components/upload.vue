<template>
  <div class="upload">

      <h2>Upload</h2>
      <br>
          <div id="overlay" v-show="uploading" v-cloak>
              <div class="overlay-content">
                  <h4 class="header">Uploading...</h4>
                  <progress-bar :progress="progress" progress-complete-text="Upload Complete!"></progress-bar>

                  <button class="btn btn-danger" @click="cancelUpload">
                      Cancel
                  </button>
              </div>
          </div>

          <div>
              <div class="form-group">
                  <upload-input @file-chosen="setFile"></upload-input>
              </div>

              <div class="form-group">
                  <button class="btn btn-primary" @click="uploadFile">
                      Upload File
                  </button>
              </div>

              <div class="alert alert-success" v-show="uploadStatus==='complete'" v-cloak>
                  Upload Complete!
              </div>

              <div class="alert alert-danger" v-show="uploadStatus==='cancelled'" v-cloak>
                  Upload Cancelled
              </div>
          </div>
  </div>
</template>

<script>

import uploadinput from '@/components/upload-comp/upload-input'
import progressbar from '@/components/upload-comp/progress-bar'

export default {
  name: 'upload',
    methods: {
        setFile(file) {
            this.file = file;
        },
        cancelUpload() {
            this.request.abort();
        },
        uploadFile() {
            let formData = new FormData();
            formData.append('file', this.file);
            this.uploading = true;
            this.uploadStatus = ""
            this.$http.post('/upload', formData, {
                before: request => {
                    this.request = request;
                },
                progress: e => {
                    this.progress = (e.loaded / e.total) * 100;
                }
            }).then(response => {
                this.uploadStatus = "complete"
                this.uploading = false;
            }, error => {
                this.progress = 0;
                this.uploading = false;
                this.uploadStatus = "cancelled"
            });
        }
    },
    data: {
        file: '',
        progress: 0,
        uploading: false,
        uploadStatus: ''
    },
    components: {
    'progress-bar': progressbar,
    'upload-input': uploadinput
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

body {
  padding: 50px;
}

[v-cloak]{
  display:none;  
}

#overlay {
  background: rgba(0, 0, 0, 0.8);
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 9998;
}

.overlay-content {
  position: absolute;
  top: 50%;
  transform: translate(0, -50%);
  z-index: 9999;
  width: 70%;
  margin-left: 15%;
}

.overlay-content > .header{
  color: #fff;
  margin-bottom:10px;
}

.message {
  margin-top: 15px;
}

</style>







