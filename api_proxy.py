import http.server
import urllib.request
import json

class ProxyHandler(http.server.SimpleHTTPRequestHandler):
    def do_GET(self):
        if self.path.startswith('/api/alura'):
            api_key = "d5081c2a8e6ac0bf4849deb2fa8099a2c42f6b945479f2b2e73b1d7c55a67844"
            url = f"https://cursos.alura.com.br/api/dashboard/{api_key}"
            
            try:
                with urllib.request.urlopen(url) as response:
                    data = response.read()
                    self.send_response(200)
                    self.send_header('Content-type', 'application/json')
                    self.send_header('Access-Control-Allow-Origin', '*')
                    self.end_headers()
                    self.wfile.write(data)
            except Exception as e:
                self.send_response(500)
                self.end_headers()
                self.wfile.write(str(e).encode())
        else:
            return super().do_GET()

if __name__ == '__main__':
    server_address = ('', 8000)
    httpd = http.server.HTTPServer(server_address, ProxyHandler)
    print("Proxy server running on port 8000...")
    httpd.serve_forever()
