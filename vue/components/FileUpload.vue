<template>
  <el-upload
    class="upload-demo"
    ref="upload"
    :action="uploadUrl"
    :limit="1"
    :on-preview="handlePreview"
    :on-remove="handleRemove"
    :http-request="handleSubmit"
    :accept="fileAccept"
    :multiple="false"
    :file-list="fileList"
  >
    <el-button
      slot="trigger"
      size="small"
      type="primary"
      :disabled="JSON.stringify(file) !== '{}'"
    >选取文件</el-button>
    <el-button
      style="margin-left: 10px;"
      size="small"
      type="success"
      @click="submitUpload"
    >
      上传到服务器
    </el-button>
    <el-button
      icon="el-icon-download"
      size="small"
      type="primary"
      @click="downloadTmp"
    >下载导入模板</el-button>
    <div slot="tip" class="el-upload__tip">只能上传.xls或者.xlsx文件</div>
  </el-upload>
</template>

<script>
// import axios from 'axios';

const accept = 'application/vnd.ms-excel,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet';

export default {
  name: 'FileUpload',
  data() {
    return {
      file: {},
      fileList: [],
      fileAccept: accept,
    };
  },
  props: {
    uploadUrl: {
      type: String,
      default: '',
    },
  },
  methods: {
    submitUpload() {
      if (JSON.stringify(this.file) === '{}') {
        this.$message({
          message: '请先选择上传的文件！',
          type: 'warning',
        });
        return;
      }
      const formData = new FormData();
      formData.append('file', this.file.file);
      this.$http.doUpload(`${this.uploadUrl}`, formData)
        .then((res) => {
          if (res.code === 200) {
            this.$message({
              message: '上传成功',
              type: 'success',
            });
            this.fileList = [];
            this.file = {};
          } else {
            this.$message.error(res.message);
          }
        });
    },
    handleRemove(file, fileList) {
      console.log(file, fileList);
      this.file = {};
    },
    handlePreview(file) {
      console.log(file);
    },
    handleSubmit(res) {
      this.file = res;
    },
    // 下载
    downloadTmp() {
      window.location.href = '健康日记导入示例.xlsx';
    },
  },
};
</script>

<style scoped>
  .upload-demo{
    padding: 20px;
  }
</style>
