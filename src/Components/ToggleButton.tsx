import React from 'react'
import { Button, Icon } from 'atomize'

interface PropTypes { onChange: () => void, className?: string, right: boolean }

const ToggleButton: React.FC<PropTypes> = (props: PropTypes) => {
  return (
  <Button
    style={{ marginTop: 15, marginRight: 0 }}
    h='2.5rem'
    w='2.5rem'
    bg='gray100'
    hoverBg='gray300'
    rounded='lg'
    onClick={props.onChange}
  >
    <Icon name={`${props.right ? 'Right' : 'Left'}Arrow`} size='20px' color='brand900' />
  </Button>
  )
}

export default ToggleButton
