from selenium import webdriver
from webdriver_manager.chrome import ChromeDriverManager
from selenium.webdriver.chrome.service import Service

servico = Service(ChromeDriverManager().install())

navegador = webdriver.Chrome(service=servico)

# Acessa a página
navegador.get("http://localhost:3000/login")

# Informa o login e a senha
navegador.find_element('xpath', '/html/body/div[1]/div/div/div[2]/div[1]/div[1]/input').send_keys("usuarioteste")
navegador.find_element('xpath', '/html/body/div[1]/div/div/div[2]/div[1]/div[2]/input').send_keys("senha_123")

#Clica no botão de Login
navegador.find_element('xpath', '/html/body/div[1]/div/div/div[2]/div[2]/div/button').click()