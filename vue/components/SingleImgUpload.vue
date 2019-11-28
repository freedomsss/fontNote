<template>
  <div class="upload-container">
    <el-button :style="{background:color,borderColor:color}"
               icon="el-icon-upload"
               size="mini"
               type="primary"
               @click="dialogVisible=true"
    >
      上传图片
    </el-button>
    <el-dialog title="图片上传" :visible.sync="dialogVisible" @close="closeDialog">
      <p class="title">一次上传一张图片(尺寸要求：125*125像素，体积要求：200k以下，格式要求：.jpg/.png)</p>
      <el-upload
        :action="$apiUrl.fileUpload"
        :limit="1"
        list-type="picture-card"
        :http-request="handleSubmit"
        :before-remove="handleRemove"
        class="'editor-slide-upload'"
        accept="image/jpeg,image/jpg,image/png"
        :class="JSON.stringify(imgFile) === '{}' ?  '' : 'hide'"
      >
        <el-button
          size="small"
          type="primary"
        >
          点击上传
        </el-button>
      </el-upload>
      <div class="btns">
        <el-button @click="closeDialog">
          取消
        </el-button>
        <el-button type="primary" @click="uploadFile">
          确定
        </el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
/* eslint-disable */
import SparkMD5 from 'spark-md5';

  export default {
    name: 'SingleImgUpload',
    props: {
      color: {
        type: String,
        default: '#1890ff'
      }
    },
    data() {
      return {
        dialogVisible: false,
        imgFile: {},
      }
    },
    methods: {
      handleSubmit(res) { // 上传前检测图片格式大小
        const isJPG = res.file.type === 'image/jpeg' || 'image/jpg' || 'image/png';
        const isLt200K = res.file.size / 1024 < 200;

        if (!isJPG) {
          this.$message.error('上传图片只能是 JPG 或者 PNG 格式!');
        }
        if (!isLt200K) {
          this.$message.error('上传图片大小不能超过 200KB!');
        }
        this.imgFile = res.file;
      },
      closeDialog() {
        this.dialogVisible = false;
      },
      handleRemove() {
        this.imgFile = {};
      },
      uploadFile() { // 图片上传
        if (JSON.stringify(this.imgFile) === '{}') {
          this.$message({
            message: '至少上传一张',
            type: 'warning',
          });
          return;
        }
        const isJPG = this.imgFile.type === 'image/jpeg' || 'image/jpg' || 'image/png';
        const isLt200K = this.imgFile.size / 1024 < 200;

        if (!isJPG) {
          this.$message.error('上传图片只能是 JPG 或者 PNG 格式!');
          return;
        }
        if (!isLt200K) {
          this.$message.error('上传图片大小不能超过 200KB!');
          return;
        }
        const formData = new FormData();
        formData.append('fileUpload', this.imgFile);
        this.get_filemd5sum(this.imgFile, formData);
      },
      get_filemd5sum(ofile, formData) {
        const that = this;
        var file = ofile;
        var tmp_md5;
        var blobSlice = File.prototype.slice || File.prototype.mozSlice || File.prototype.webkitSlice,
          chunkSize = 8097152, // Read in chunks of 2MB
          chunks = Math.ceil(file.size / chunkSize),
          currentChunk = 0,
          spark = new SparkMD5.ArrayBuffer(),
          fileReader = new FileReader();

        fileReader.onload = function(e) {
          spark.append(e.target.result); // Append array buffer
          currentChunk++;
          // var md5_progress = Math.floor((currentChunk / chunks) * 100);

          // console.log(file.name + "  正在处理，请稍等," + "已完成" + md5_progress + "%");
          // console.log(ofile);
          if (currentChunk < chunks) {
            this.loadNext(chunkSize, file, blobSlice, currentChunk, fileReader);
          } else {
            tmp_md5 = spark.end();
            formData.append('meta', JSON.stringify([{
              md5: tmp_md5,
              fileName: file.name
            }]));
            that.$http.doUpload(`${that.$apiUrl.fileUpload}`, formData)
              .then((res) => {
                that.$message({
                  message: '上传成功',
                  type: 'success',
                });
                that.$emit('successCBK', res);
                that.closeDialog();
              });
          }
        };

        fileReader.onerror = function() {
          console.warn('oops, something went wrong.');
        };

        this.loadNext(chunkSize, file, blobSlice, currentChunk, fileReader);
      },
      loadNext(chunkSize, file, blobSlice, currentChunk, fileReader) {
        var start = currentChunk * chunkSize,
          end = ((start + chunkSize) >= file.size) ? file.size : start + chunkSize;
        fileReader.readAsArrayBuffer(blobSlice.call(file, start, end));
      },
    },
  }
</script>

<style lang="less" scoped>
  .editor-slide-upload {
    .el-upload--picture-card {
      width: 100%;
    }
  }
  .btns{
    margin-top: 20px;
  }
  .title{
    line-height: 40px;
  }
</style>
<style lang="less">
  .hide .el-upload--picture-card {
    margin-bottom: 20px;
    display: none;
  }
</style>

