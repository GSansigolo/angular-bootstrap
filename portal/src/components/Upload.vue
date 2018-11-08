<template>
<div id="upload">
    <h1>Upload</h1>
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
            Upload Canclled
        </div>
    </div>
</div>

</template>

<script>

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
            this.$http.post('/echo/json/', formData, {
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
    }

}

</script>

<style lang="scss">

</style>