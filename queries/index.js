const query = `
{
  principal {
    content_es {
      principal {
        titulo
        descripcion
      }
      cta_titulo
      cta_vinculo
    }
    content_en {
      principal {
        titulo
        descripcion
      }
      cta_titulo
      cta_vinculo
    }
  }

  nosotro {
    content_es {
      principal {
        titulo
        descripcion
      }
      atributos_lista {
        titulo
        descripcion
        icono {
          url
        }
      }
      atributos_titulo
      atributos_descripcion
    }
  }
  
  nosotro {
    content_en {
      principal {
        titulo
        descripcion
      }
      atributos_lista {
        titulo
        descripcion
        icono {
          url
        }
      }
      atributos_titulo
      atributos_descripcion
    }
  }

  contacto {
    content_es {
      principal {
        titulo
        descripcion
      }
    }
    content_en {
      principal {
        titulo
        descripcion
      }
    }
  }
}
`

module.exports = query