import { screen, render } from '@testing-library/react'
import { composeStories } from '@storybook/testing-react'
import * as stories from './Button.stories'

const { Primary, Rounded } = composeStories(stories)
describe('Button components', () => {
  it('Renders a Primary button', () => {
    render(<Primary />)
    const primaryButton = screen.getByRole('button')
    expect(primaryButton).toHaveTextContent(Primary.args.label)
  })

  it('Renders a rounded button', () => {
    render(<Rounded />)
    const roundedButton = screen.getByRole('button')
    expect(roundedButton).toHaveTextContent('')
  })
})
