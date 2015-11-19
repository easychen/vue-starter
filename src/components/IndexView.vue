<template>
	<div class="container">
		<h4>测试</h4>
		<ul>
			<li><a @click="notice" href="javascript:void(0);">点我~</a></li>
		</ul>
	</div>
</template>

<script>

export default {

  name: 'IndexView',
  methods:
  {
    notice:function()
    {
      alert('喵~');
    }
  },
  data () {
    return {
      islogin: false
    }
  }
}

</script>