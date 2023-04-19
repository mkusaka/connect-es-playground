# connect-es-playground

```
brew install mkcert
mkcert -install
mkcert localhost 127.0.0.1 ::1
export NODE_EXTRA_CA_CERTS="$(mkcert -CAROOT)/rootCA.pem"
```

generate

```
yarn buf generate proto 
```
