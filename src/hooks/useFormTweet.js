import { ref } from "vue"

export default function useFormTweet() {
  const showForm = ref(false)

  const openCloseForme = () => {
    showForm.value = !showForm.value
  }

  return {
    showForm,
    openCloseForme
  }
}