from http.server import HTTPServer, SimpleHTTPRequestHandler
import socket

class CustomHeaderHandler(SimpleHTTPRequestHandler):
    def do_GET(self):
        # 打印请求头信息
        print("\n=== 请求头信息 ===")
        user_agent = self.headers.get('User-Agent', 'Unknown')
        print(f"User-Agent: {user_agent}")
        print("================\n")
        
        # 设置响应头
        self.send_response(200)
        self.send_header('Server', 'CustomPythonServer')
        self.end_headers()
        
        # 调用父类的方法来处理静态文件
        return SimpleHTTPRequestHandler.do_GET(self)

def get_ip():
    s = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)
    try:
        s.connect(('8.8.8.8', 80))
        IP = s.getsockname()[0]
    except Exception:
        IP = '127.0.0.1'
    finally:
        s.close()
    return IP

# 使用 0.0.0.0 而不是特定IP，这样可以接受所有网络接口的连接
host = '0.0.0.0'
port = 8000

handler = CustomHeaderHandler
server = HTTPServer((host, port), handler)
print(f'\n在同一网络下的其他设备可以通过以下地址访问：')
print(f'http://{get_ip()}:{port}')
print(f'\n本机访问地址：')
print(f'http://localhost:{port}')
print(f'http://127.0.0.1:{port}')
print('\n按 Ctrl+C 停止服务器\n')

server.serve_forever()
