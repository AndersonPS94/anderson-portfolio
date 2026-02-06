import requests
import json
import os

# Chave da API da Alura (obtida do api_proxy.py)
alura_api_key = "d5081c2a8e6ac0bf4849deb2fa8099a2c42f6b945479f2b2e73b1d7c55a67844"
alura_api_url = f"https://cursos.alura.com.br/api/dashboard/{alura_api_key}"

alura_data_path = "assets/data/alura.json"

def update_alura_data():
    try:
        response = requests.get(alura_api_url)
        response.raise_for_status()  # Levanta um erro para códigos de status HTTP ruins (4xx ou 5xx)
        data = response.json()

        # Garante que o diretório assets/data exista
        os.makedirs(os.path.dirname(alura_data_path), exist_ok=True)

        with open(alura_data_path, "w", encoding="utf-8") as f:
            json.dump(data, f, ensure_ascii=False, indent=4)
        print(f"Dados da Alura atualizados com sucesso em {alura_data_path}")

    except requests.exceptions.RequestException as e:
        print(f"Erro ao acessar a API da Alura: {e}")
    except json.JSONDecodeError as e:
        print(f"Erro ao decodificar JSON da API da Alura: {e}")
    except Exception as e:
        print(f"Ocorreu um erro inesperado: {e}")

if __name__ == "__main__":
    update_alura_data()
