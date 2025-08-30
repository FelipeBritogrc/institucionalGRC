# 🚀 Guia de Deploy para HostGator

## 📋 Checklist Pré-Deploy

Antes de fazer o deploy, certifique-se de que:

- [ ] ✅ O projeto está funcionando localmente (`npm run dev`)
- [ ] ✅ Todos os links estão funcionando
- [ ] ✅ As imagens estão carregando corretamente
- [ ] ✅ Não há erros no console do navegador

## 🔧 Passos para Deploy

### 1. Gerar Build de Produção

```bash
# No terminal, na pasta do projeto:
npm run build
```

Isso criará uma pasta `dist/` com todos os arquivos otimizados.

### 2. Preparar Arquivos para Upload

A pasta `dist/` conterá:
```
dist/
├── index.html
├── assets/
│   ├── index-[hash].js
│   ├── index-[hash].css
│   └── [outros arquivos]
├── .htaccess          # ✅ IMPORTANTE: Para roteamento
├── _redirects         # Para outros provedores
└── [outros arquivos estáticos]
```

### 3. Upload para HostGator

#### Via cPanel File Manager:
1. Acesse o cPanel do seu HostGator
2. Abra o "File Manager"
3. Navegue até `public_html/` (ou pasta do seu domínio)
4. **IMPORTANTE**: Faça backup dos arquivos existentes
5. Exclua arquivos antigos (exceto `.htaccess` se já existir)
6. Faça upload de TODOS os arquivos da pasta `dist/`
7. Certifique-se de que o arquivo `.htaccess` está na raiz

#### Via FTP:
1. Use um cliente FTP (FileZilla, WinSCP, etc.)
2. Conecte-se ao seu servidor HostGator
3. Navegue até `public_html/`
4. Faça upload de todos os arquivos da pasta `dist/`

### 4. Verificar Configuração do Servidor

#### Arquivo .htaccess (CRÍTICO):
O arquivo `.htaccess` já está incluído no projeto e será copiado automaticamente. Ele contém:

```apache
Options -MultiViews
RewriteEngine On
RewriteCond %{REQUEST_FILENAME} !-f
RewriteRule ^ index.html [QR,L]
```

**Este arquivo é ESSENCIAL** para que as rotas do React Router funcionem corretamente.

### 5. Testar o Deploy

Após o upload, teste:

- [ ] ✅ Página inicial carrega: `https://seudominio.com/`
- [ ] ✅ Rotas diretas funcionam: `https://seudominio.com/contact`
- [ ] ✅ Refresh da página funciona em qualquer rota
- [ ] ✅ Links internos funcionam
- [ ] ✅ Imagens carregam corretamente
- [ ] ✅ Não há erros 404 nas rotas

## 🔍 Resolução de Problemas

### Problema: Erro 404 ao acessar rotas diretamente

**Causa**: Servidor não está redirecionando para `index.html`

**Solução**:
1. Verifique se o arquivo `.htaccess` está na raiz do domínio
2. Confirme se o HostGator tem mod_rewrite habilitado
3. Teste as permissões do arquivo `.htaccess` (644)

### Problema: Imagens não carregam

**Causa**: Caminhos incorretos ou arquivos não enviados

**Solução**:
1. Verifique se a pasta `assets/` foi enviada completamente
2. Confirme se as imagens em `public/grc-uploads/` foram enviadas
3. Teste URLs das imagens diretamente no navegador

### Problema: CSS não carrega

**Causa**: Arquivos CSS não foram enviados ou caminhos incorretos

**Solução**:
1. Verifique se todos os arquivos da pasta `assets/` foram enviados
2. Confirme se o `index.html` está referenciando os arquivos CSS corretos
3. Limpe o cache do navegador

### Problema: JavaScript não funciona

**Causa**: Arquivos JS não foram enviados ou há erros

**Solução**:
1. Abra o console do navegador (F12) e verifique erros
2. Confirme se todos os arquivos `.js` da pasta `assets/` foram enviados
3. Verifique se não há bloqueios de CORS

## 📁 Estrutura de Arquivos no Servidor

Após o deploy, sua estrutura no HostGator deve ficar:

```
public_html/
├── index.html          # ✅ Página principal
├── .htaccess          # ✅ CRÍTICO: Configuração de rotas
├── assets/            # ✅ Arquivos JS/CSS otimizados
│   ├── index-[hash].js
│   ├── index-[hash].css
│   └── [outros]
├── grc-uploads/       # ✅ Imagens do projeto
│   ├── [imagens].png
│   └── [outros]
└── [outros arquivos estáticos]
```

## 🔄 Processo de Atualização

Para atualizações futuras:

1. **Desenvolvimento local**:
   ```bash
   # Faça suas alterações
   npm run dev  # Teste localmente
   ```

2. **Build e deploy**:
   ```bash
   npm run build  # Gera nova build
   # Upload da pasta dist/ para o servidor
   ```

3. **Verificação**:
   - Teste todas as rotas
   - Verifique se não há cache antigo
   - Confirme funcionamento em diferentes dispositivos

## ⚠️ Pontos de Atenção

### SEMPRE faça:
- [ ] ✅ Backup antes de substituir arquivos
- [ ] ✅ Teste local antes do deploy
- [ ] ✅ Verifique se `.htaccess` está presente
- [ ] ✅ Teste todas as rotas após deploy
- [ ] ✅ Confirme que imagens carregam

### NUNCA faça:
- [ ] ❌ Upload direto da pasta `src/` 
- [ ] ❌ Esqueça do arquivo `.htaccess`
- [ ] ❌ Deploy sem testar localmente
- [ ] ❌ Substitua arquivos sem backup

## 📞 Suporte HostGator

Se persistirem problemas:

1. **Verifique se mod_rewrite está habilitado**:
   - Entre em contato com suporte HostGator
   - Solicite verificação da configuração Apache

2. **Teste configuração .htaccess**:
   - Crie um arquivo de teste para verificar se está funcionando

3. **Logs de erro**:
   - Acesse logs de erro no cPanel para diagnóstico

---

**Última atualização**: Janeiro 2025  
**Responsável**: Equipe de Desenvolvimento