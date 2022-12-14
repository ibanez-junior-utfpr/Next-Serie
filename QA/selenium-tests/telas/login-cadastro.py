from selenium import webdriver
from webdriver_manager.chrome import ChromeDriverManager
from selenium.webdriver.chrome.service import Service
import time

servico = Service(ChromeDriverManager().install())

navegador = webdriver.Chrome(service=servico)

# Acessa a página
navegador.get("http://localhost:3000/login")

# Clica no link 'Cadastre-se'
navegador.find_element('xpath', '/html/body/div[1]/div/div/div[2]/a').click()
time.sleep(3)

# Seta as informações do cadastro
navegador.find_element('xpath', '/html/body/div[1]/div/div/div[2]/div[1]/div[1]/input').send_keys("usuarioteste@email.com")
navegador.find_element('xpath', '/html/body/div[1]/div/div/div[2]/div[1]/div[2]/input').send_keys("usuarioteste")
navegador.find_element('xpath', '/html/body/div[1]/div/div/div[2]/div[1]/div[3]/input').send_keys("senha_123")
navegador.find_element('xpath', '/html/body/div[1]/div/div/div[2]/div[1]/div[4]/input').send_keys("senha_123")

# Clica no botão Cadastrar
navegador.find_element('xpath', '/html/body/div[1]/div/div/div[2]/div[2]/div/button').click()