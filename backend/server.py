from flask import Flask

app = Flask(__name__) #instancia

@app.route('/') #wrap (decorator)
def index():
    return 'Hola mundo' #return string

if __name__ == '__main__':
    app.run(debug=True, port=8002) #lunch server on port 5000
