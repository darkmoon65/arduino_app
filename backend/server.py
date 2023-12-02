from flask import Flask, request
import serial 
import time 

app = Flask(__name__) #instancia
arduino = serial.Serial(port='/dev/ttyACM0', baudrate=115200) 

@app.route('/prender', methods = ['POST'])
def prender():
    print(request.json)
    data = request.json
    x = data['action']
    arduino.write(bytes(x, 'utf-8')) 
    time.sleep(1) 
    data = arduino.readline() 
    return data

@app.route('/temperatura', methods = ['GET'])
def getTemperatura():
    datos = arduino.readline() 
    print(datos)
    return datos

if __name__ == '__main__':
    app.run(debug=True, port=8002) #lunch server on port 5000
