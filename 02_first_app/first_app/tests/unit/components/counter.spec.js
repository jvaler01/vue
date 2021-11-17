import { shallowMount } from '@vue/test-utils'
import Counter from '@/components/Counter.vue'

describe('Counter Component', () => {
  /*test('Match with the snapshot', () => {
    const wrapper = shallowMount( Counter );

    //Check the HTML with a snapshot. -u flag update the shanpshot
    expect( wrapper.html() ).toMatchSnapshot();
  })*/

  test('h2 default value = Counter', () => {
    const wrapper = shallowMount( Counter );

    expect(wrapper.find('h2').exists()).toBeTruthy()

    const h2Text = wrapper.find('h2').text();

    expect( h2Text ).toBe('Counter');
  })
})