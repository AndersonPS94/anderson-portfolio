import requests
import json
import os

def update_data():
    # Chave da API fornecida pelo usuário
    api_key = "d5081c2a8e6ac0bf4849deb2fa8099a2c42f6b945479f2b2e73b1d7c55a67844"
    url = f"https://cursos.alura.com.br/api/dashboard/{api_key}"
    
    # Caminho relativo para funcionar em qualquer ambiente (Local ou GitHub Actions)
    base_path = os.path.dirname(os.path.abspath(__file__))
    data_dir = os.path.join(base_path, "assets", "data")
    file_path = os.path.join(data_dir, "alura.json")
    
    try:
        response = requests.get(url)
        if response.status_code == 200:
            data = response.json()
            
            # Garantir que o diretório de dados exista
            os.makedirs(data_dir, exist_ok=True)
            
            with open(file_path, "w", encoding="utf-8") as f:
                json.dump(data, f, indent=4, ensure_ascii=False)
            
            print(f"Dados da Alura atualizados com sucesso em: {file_path}")
        else:
            print(f"Erro ao buscar dados: {response.status_code}")
    except Exception as e:
        print(f"Exceção ao atualizar dados: {e}")

if __name__ == "__main__":
    update_data()
