def my_function():
    radio.send_number(8)
GHBit.on_key(GHBit.enButton.B3, my_function)

def my_function2():
    radio.send_number(6)
GHBit.on_key(GHBit.enButton.B1, my_function2)

def my_function3():
    radio.send_number(9)
GHBit.on_key(GHBit.enButton.B4, my_function3)

def my_function4():
    radio.send_number(7)
GHBit.on_key(GHBit.enButton.B2, my_function4)

radio.set_group(1)
basic.show_icon(IconNames.HEART)
radio.set_transmit_power(7)

def on_forever():
    if GHBit.rocker(GHBit.enRocker.UP):
        radio.send_number(1)
    elif GHBit.rocker(GHBit.enRocker.DOWN):
        radio.send_number(2)
    elif GHBit.rocker(GHBit.enRocker.LEFT):
        radio.send_number(3)
    elif GHBit.rocker(GHBit.enRocker.RIGHT):
        radio.send_number(4)
    elif GHBit.rocker(GHBit.enRocker.PRESS):
        radio.send_number(5)
    elif input.button_is_pressed(Button.A):
        radio.send_number(10)
    else:
        radio.send_number(0)
basic.forever(on_forever)
