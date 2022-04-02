<script>
import { ref, nextTick, defineComponent, onMounted } from 'vue'
import { useMessage } from 'naive-ui'

const options = [
  {
    label: '中国海关接口',
    key: '1.1',
    children: [
      {
        label: '电子化报关接口',
        key: '1.1.1',
        href: ''
      },
      {
        label: '商检接口',
        key: '1.1.2',
        href: ''
      },
      {
        label: '原产地证接口',
        key: '1.1.3',
        href: ''
      }
    ]
  },
  {
    label: '非洲国家接口',
    key: '1.2',
    children: [
      {
        label: '电子化报关接口',
        key: '1.2.1',
        href: ''
      },
      {
        label: '商检接口',
        key: '1.2.2',
        href: ''
      },
      {
        label: '原产地证接口',
        key: '1.2.3',
        href: ''
      }
    ]
  },

  {
    label: '税务接口',
    key: '1.3',
    children: [
      {
        label: '税务统计',
        key: '1.3.1',
        href: ''
      },
      {
        label: '退税系统',
        key: '1.3.2',
        href: ''
      }
    ]
  },
  {
    label: '领导视角',
    key: '1.4',
    href: '',
    children: [
      {
        label: '数字贸易',
        key: '1.4.1',
        href: '',
        show: true,
        message: ['区块链交易基础']
      },
      {
        label: '品种管理',
        key: '1.4.2',
        href: '',
        show: true,
        message: ['哪些产品准入，进口量大小，政府引导国别管理']
      },
      {
        label: '价格管理',
        key: '1.4.3',
        href: '',
        show: true,
        message: ['境内外每个产品每天的价格报告，价格指数']
      },
      {
        label: '金融链条',
        key: '1.4.4',
        href: '',
        show: true,
        message: ['支付、供应链金融、上下游开户、人民币、美元资金池，风险池规划、省级做市商规划']
      },
      {
        label: '衍生链条',
        key: '1.4.5',
        href: '',
        show: true,
        message: [
          '通过非数字平台，衍生出来的需求、生产，带动多少非洲农民致富；带动加工、产业园区建设、就业、产生的税收等统计'
        ]
      },
      {
        label: '风险管控',
        key: '1.4.6',
        href: '',
        show: true,
        message: [
          '智能合约、区块链技术风控、算法、统计保险机构对中非的支持、出口信用保险、省级中非商检平台接口'
        ]
      }
    ]
  },
  {
    label: '其他',
    key: '1.5',
    href: '',
    // show: true,
    // message: [
    //   '进口额度、品种、任务、达标、警戒、领导审批、补贴发放板块、补贴支付板块、中非低息贷款申请、品牌管理、工程申报、进度管理、ODI、人才管理、对外商务活动申报'
    // ],
    children: [
      {
        label: '进口额度',
        key: '1.5.1',
        href: ''
      },
      {
        label: '品种',
        key: '1.5.2',
        href: ''
      },
      {
        label: '任务',
        key: '1.5.3',
        href: ''
      },
      {
        label: '达标',
        key: '1.5.4',
        href: ''
      },
      {
        label: '警戒',
        key: '1.5.5',
        href: ''
      },
      {
        label: '领导审批',
        key: '1.5.6',
        href: ''
      },
      {
        label: '补贴发放板块',
        key: '1.5.7',
        href: ''
      },
      {
        label: '补贴支付板块',
        key: '1.5.8',
        href: ''
      },
      {
        label: '中非低息贷款申请',
        key: '1.5.9',
        href: ''
      },
      {
        label: '品牌管理',
        key: '1.5.10',
        href: ''
      },
      {
        label: 'ODI',
        key: '1.5.11',
        href: ''
      },
      {
        label: '人才管理',
        key: '1.5.12',
        href: ''
      },
      {
        label: '对外商务活动申报',
        key: '1.5.13',
        href: ''
      }
    ]
  }
]

const buttons = [
  {
    label: '小宗交易平台',
    href: 'http://www.decxagri.com/',
    options: [
      { label: '中非小宗产品平台', key: '2.0', href: 'http://www.decxagri.com/' },
      {
        label: '智能仓储系统',
        key: '2.1',
        href: 'http://www.decxagri.com/Warehouse/Warehouse.html'
      },
      {
        label: '信息发布，撮合系统',
        key: '2.2',
        href: 'http://www.decxagri.com/Manager/Manager.html'
      },
      { label: '供应链金融系统', key: '2.3', href: '' },
      { label: '经纪人系统', key: '2.4', href: '' },
      { label: '追溯系统', key: '2.5', href: 'http://www.decxagri.com/caosu/index.html' },
      { label: '遥感系统', key: '2.6', href: '' },
      { label: '客户管理系统', key: '2.7', href: 'http://www.decxagri.com/Crm/index.html' }
    ]
  },
  {
    label: '中非大宗矿产平台',
    // href: 'http://hunan.decxgroup.com/',
    options: [
      { label: '大宗交易平台', key: '3.0', href: 'http://hunan.decxgroup.com/' },
      {
        label: '智能仓储系统',
        key: '3.1',
        href: 'http://www.decxagri.com/Warehouse/Warehouse.html'
      },
      { label: '信息发布，撮合系统', key: '3.2', href: '' },
      { label: '供应链金融系统', key: '3.3', href: '' },
      { label: '经纪人系统', key: '3.4', href: '' },
      { label: '追溯系统', key: '3.5', href: 'http://www.decxagri.com/caosu/index.html' },
      { label: '遥感系统', key: '3.6', href: '' },
      { label: '客户管理系统', key: '3.7', href: 'http://www.decxagri.com/Crm/index.html' }
    ]
  },
  {
    label: '其它运营合作平台',
    options: [
      { label: '其他产品平台(比如水产)', key: '4.1', href: '' },
      { label: '公共物流服务平台(比如八百里)', key: '4.2', href: '' }
    ]
  },

  {
    label: '中非易货平台',
    options: [
      {
        label: '招商局DJmart系统',
        key: '5.1',
        href: 'http://www.decxagri.com/djimart/djimart.html'
      },
      {
        label: '招商局中非物流系统',
        key: '5.2',
        href: 'http://www.decxagri.com/djimart/wuliu.html'
      }
    ]
  },
  {
    label: '人民币跨境平台',
    options: [
      { label: '连接丝路银行CIPS系统', key: '6.1', href: 'http://www.decxagri.com/bank/bank.html' },
      { label: '银联系统', key: '6.2', href: 'http://www.decxagri.com/bank/banky.html' }
    ]
  }
]

export default defineComponent({
  setup() {
    const message = useMessage()
    const showModalRef = ref(false)
    const currVal = ref({})
    const box = ref(null)
    onMounted(() => {
      nextTick(() => {
        const x = window.innerWidth / 1680
        if (window.innerWidth > 500) {
          box.value.style.transform = `scale(${x})`
          box.value.style.transformOrigin = 'top center'
        } else {
          box.value.style.transform = `scale(1)`
          box.value.style.transformOrigin = 'top center'
        }
        window.addEventListener('resize', e => {
          const x = window.innerWidth / 1680
          if (window.innerWidth > 500) {
            box.value.style.transform = `scale(${x})`
            box.value.style.transformOrigin = 'top center'
          } else {
            box.value.style.transform = `scale(1)`
            box.value.style.transformOrigin = 'top center'
          }
        })
      })
    })

    return {
      options,
      buttons,
      currVal,
      box,
      handleSelect(key, option) {
        console.log(key, option)
        // message.info(String(key))
        if (option.href) {
          // location.href = option.href
          window.open(option.href)
        }
        if (option.show) {
          showModalRef.value = true
          currVal.value = {
            title: option.label,
            message: option.message
          }
        }
      },
      onPage(data) {
        if (data.href) {
          // location.href = data.href
          window.open(data.href)
        }
      },
      showModal: showModalRef,

      onNegativeClick() {
        message.success('Cancel')
        showModalRef.value = false
      },
      onPositiveClick() {
        message.success('Submit')
        showModalRef.value = false
      }
    }
  }
})
</script>

<template>
  <div class="bg">
    <main ref="box">
      <div class="title">中非数字化平台</div>
      <div class="btns">
        <n-dropdown
          class="btn base"
          :options="options"
          placement="bottom-start"
          @select="handleSelect"
          size="large"
        >
          <n-button class="base" type="default" size="large" color="#7a3221" strong round>
            基础服务平台
          </n-button>
        </n-dropdown>
      </div>
      <div class="btns">
        <n-dropdown
          class="btn"
          v-for="item in buttons"
          :options="item.options"
          placement="bottom-start"
          @select="handleSelect"
          size="large"
        >
          <n-button type="default" size="large" color="rgb(160,125,80)" strong round>
            {{ item.label }}
          </n-button>
        </n-dropdown>
      </div>
      <n-modal v-model:show="showModal">
        <n-card
          style="width: 600px"
          :title="currVal.title"
          :bordered="false"
          size="huge"
          role="dialog"
          aria-modal="true"
        >
          <div v-for="item in currVal.message" class="message">{{ item }}</div>
        </n-card>
      </n-modal>
    </main>
  </div>
</template>

<style lang="scss" scoped>
.bg {
  width: 100vw;
  height: 100vh;
  overflow: auto;
  background: url('@/assets/images/bg.jpg') top center repeat transparent;
  background-size: 120%;
  main {
    padding-left: 200px;
  }
  .title {
    text-align: center;
    font-size: 84px;
    padding: 60px 0 0px;
    color: #333;
    text-shadow: 2px 2px 0 #fff;
    margin-bottom: 50px;
    margin-top: 30px;
    font-weight: 700;
  }
}
.btns {
  display: flex;
  justify-content: center;
  margin-bottom: 0;
  .n-button {
    margin: 0 5px;
    padding: 0 20px;
    height: 60px;
    font-size: 28px;
  }

  .n-button.base {
    padding: 0 100px;
    margin-bottom: 130px;
    font-size: 42px;
    height: 90px;
  }

  .n-button .n-button__content {
    text-shadow: 1px 1px #fff;
  }
}

.message {
  font-size: 16px;
}
.n-card {
  max-width: 90%;
}

@media screen and (max-width: 500px) {
  .bg {
    width: 100vw;
    height: 100vh;
    overflow: auto;
    background: url('@/assets/images/bg.png') center center no-repeat transparent;
    background-size: cover;
    main {
      padding-left: 0;
    }
    .title {
      text-align: center;
      font-size: 36px;
      padding: 0;
      color: #333;
      text-shadow: 2px 2px 0 #fff;
      margin-bottom: 20px;
      margin-top: 20px;
    }
  }
  .btns {
    display: flex;
    justify-content: center;
    flex-direction: column;
    margin-bottom: 20px;

    .n-button {
      margin: 0 20px;
      padding: 0 20px;
      height: 50px;
      font-size: 16px;
      margin-bottom: 20px;
    }

    .n-button.base {
      padding: 0 100px;
      margin-bottom: 40px;
      font-size: 24px;
      height: 60px;
    }
    .n-button.base .n-button__content {
      text-shadow: 1px 1px #fff;
      font-size: 24px;
    }

    .n-button .n-button__content {
      text-shadow: 1px 1px #fff;
    }
  }
}
</style>
