<template id="upload-input">
    <div>
        <!-- PRETTY FILE INPUT HIDDEN -->
        <div class="input-group">
            <input type="text" class="form-control" placeholder="Choose File..." :value="file.name" readonly>
            <span class="input-group-btn">
                <button class="btn btn-default" type="button" @click="launchFilePicker"><span class="glyphicon glyphicon-paperclip" aria-hidden="true"></span></button>
            </span>
        </div>

        <!-- REAL FILE INPUT HIDDEN -->
        <input type="file" style="display:none" ref="file" v-uploader />
    </div>
</template>


<script>

  export default {
    name: 'upload-input',
    directives: {
        uploader: {
            bind(el, binding, vnode) {
                el.addEventListener('change', e => {
                    if (e.target.files[0] !== undefined) {
                        vnode.context.file = e.target.files[0];
                    }
                });
            }
        },
    },
    watch: {
        file(val) {
            this.$emit('file-chosen', val);
        }
    },
    methods: {
        launchFilePicker() {
            this.$refs.file.click();
        }
    },
    data() {
        return {
            file: ''
        }
    }
  }

</script>

<style lang="scss">

</style>