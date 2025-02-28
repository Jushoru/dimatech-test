  <script setup>
  import {ref} from "vue";

  const dialogRef = ref(null);
  const showDialog = () => dialogRef.value.showModal();
  const closeDialog = () => dialogRef.value.close();

  defineExpose ({
    show: showDialog,
    close: closeDialog,
  });

  function closeFromEvent(e) {
    if (e.currentTarget === e.target) {
      closeDialog();
    }
  }
  </script>

  <template>
    <dialog ref="dialogRef" @click="closeFromEvent">
      <slot/>
    </dialog>
  </template>

  <style>
  dialog::before,
  dialog::after {
    content: none;
    padding: 0
  }

  dialog {
    position: relative;
    min-height: min-content;
    min-width: min-content;
    margin: auto;
    border-radius: 15px;
  }


  </style>