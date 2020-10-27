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
  
  servicio {
    content_es {
      principal {
        titulo
        descripcion
      }
      especialidades {
        id
        nombre
      }
      lista {
        id
        tipo
        titulo
        item
      }
    }
    content_en {
      principal {
        titulo
        descripcion
      }
      especialidades {
        id
        nombre
      }
      lista {
        id
        tipo
        titulo
        item
      }
    }
  }

  serviciosAdicionale {
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