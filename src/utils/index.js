export const actionSheet = {
  defaultSheet: () => {
    return {
      show: false,
      hidden: false
    }
  },

  show: () => {
    return {
      show: true,
      hidden: false
    }
  },

  hide: () => {
    return {
      show: false,
      hidden: true
    }
  }

}
