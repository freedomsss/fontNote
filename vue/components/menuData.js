/*
* 目前仅仅考虑只有二级菜单的情况，如果还有三级菜单需更新
* */
const siderBar = [{
  link: '/',
  index: '/',
  icon: 'el-icon-third-home-fill',
  title: '首页',
  children: [],
},
{
  link: '',
  index: '4',
  icon: 'el-icon-third-snippets',
  title: '业务管理',
  children: [
    {
      link: '/DoctorList',
      index: '/DoctorList',
      icon: 'el-icon-third-team',
      title: '医生管理',
      children: [],
    },
    {
      link: '/projectManagement',
      index: '/projectManagement',
      icon: 'el-icon-third-audit',
      title: '项目管理',
    },
    {
      link: '/dataReport',
      index: '/dataReport',
      icon: 'el-icon-third-linechart',
      title: '报表数据',
    },
    {
      link: '/serviceReportManagement',
      index: '/serviceReportManagement',
      icon: 'el-icon-third-reconciliation',
      title: '报告服务管理',
    },
  ],
},
// {
//   link: '',
//   index: '1',
//   icon: 'el-icon-third-database-fill',
//   title: '系统管理',
//   children: [{
//     link: '/DictionaryManagement',
//     index: '/DictionaryManagement',
//     icon: 'el-icon-third-read-fill',
//     title: '字典管理',
//   },
//   {
//     link: '/MessageTemplate',
//     index: '/MessageTemplate',
//     icon: 'el-icon-third-comment',
//     title: '短信模板管理',
//   }],
// },
{
  link: '',
  index: '2',
  icon: 'el-icon-third-customerservice-fill',
  title: '客服管理',
  children: [
    {
      link: '/NewPatientList',
      index: '/NewPatientList',
      icon: 'el-icon-third-addteam',
      title: '患者管理',
    },
    {
      link: '/AbnormalPatientList',
      index: '/AbnormalPatientList',
      icon: 'el-icon-third-file-unknown',
      title: '异常患者管理',
    },
    {
      link: '/patientDiaryList',
      index: '/patientDiaryList',
      icon: 'el-icon-third-snippets-fill',
      title: '健康日记管理',
    },
  ],
},
];

export default siderBar;
