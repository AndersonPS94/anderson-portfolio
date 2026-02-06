import requests
import json
import os

def update_data():
    api_key = "d5081c2a8e6ac0bf4849deb2fa8099a2c42f6b945479f2b2e73b1d7c55a67844"
    url = f"https://cursos.alura.com.br/api/dashboard/{api_key}"
    
    try:
        response = requests.get(url)
        if response.status_code == 200:
            data = response.json()
            # Garantir que o diretório assets exista
            os.makedirs("/home/ubuntu/anderson-portfolio/assets/data", exist_ok=True)
            with open("/home/ubuntu/anderson-portfolio/assets/data/alura.json", "w", encoding="utf-8") as f:
                json.dump(data, f, indent=4, ensure_ascii=False)
            print("Dados da Alura atualizados com sucesso.")
        else:
            print(f"Erro ao buscar dados: {response.status_code}")
    except Exception as e:
        print(f"Exceção ao atualizar dados: {e}")

if __name__ == "__main__":
    update_data()
