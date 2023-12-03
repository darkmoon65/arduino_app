from flask import Flask, request, jsonify
import serial 
import time 
import threading

app = Flask(__name__)
last_temp = ''
run_thread = True
stop_event = threading.Event()

arduino = serial.Serial(port='/dev/ttyACM0', baudrate=115200) 

@app.route('/control_manual', methods = ['POST'])
def control_manual():
    print(request.json)
    data = request.json
    x = data['action']
    
    stop_thread()
    time.sleep(2) 
    arduino.write(bytes(x, 'utf-8')) 
    time.sleep(1) 
    return jsonify({'status': True})

@app.route('/temperatura', methods = ['GET'])
def getTemperatura(): 
    global last_temp
    return jsonify( {'status': True, 'data': last_temp})

@app.route('/prender_automatico', methods = ['POST'])
def prender_automatico():
    start_thread()
    return jsonify({'status': True})

def start_thread():
    # stop_event.clear()
    global run_thread
    run_thread = True

    thread1 = threading.Thread(target=main_check_temperature, args=(arduino,), daemon=True)
    thread1.start()

def stop_thread():
    # stop_event.set()
    global run_thread
    run_thread = False
    
def main_check_temperature(con): 
    global last_temp 
    global run_thread
    
    # while not stop_event.is_set():
    while run_thread:
        try:
            con.flushInput() #limpiamos la data acumulada 
            #time.sleep(1) 
            print("checking")
            last_temp = con.readline()
            last_temp_number = float(last_temp.decode().strip())
            last_temp = last_temp_number
            print(last_temp_number)
            if(last_temp_number > 35):
                con.write(bytes('A', 'utf-8'))
            elif(last_temp_number < 33):
                con.write(bytes('C', 'utf-8'))
            
            stop_event.wait(1)
        except Exception as e:
            print(f"Error : {e}")


if __name__ == '__main__':
    thread1 = threading.Thread(target=main_check_temperature, args=(arduino,), daemon=True)
    thread1.start()
    app.run(debug=False, port=8002)
    
