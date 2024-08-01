<script lang="ts">
import TypeIt from 'typeit'

export default defineComponent({
  name: 'TypeIt',
  props: {
    speed: {
      type: Number,
      default: 50,
    },
    values: {
      type: Array,
      default: (): string[] => [],
    },
    className: {
      type: String,
      default: 'type-it',
    },
    cursor: {
      type: Boolean,
      default: false,
    },
    loop: {
      type: Boolean,
      default: true,
    },
  },
  mounted() {
    new (TypeIt as any)(`.${this.className}`, {
      strings: this.values,
      speed: this.speed,
      cursor: this.cursor,
      loop: this.loop,
    }).go()
  },
  render() {
    return h(
      'div',
      {
        class: this.className,
      },
      {
        default: () => [],
      },
    )
  },
})
</script>
