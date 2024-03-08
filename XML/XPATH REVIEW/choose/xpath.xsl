<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <xsl:template match="/">
        <html>
            <body>
                <h2>Choose</h2>
                <table border="1">
                    <tr bgcolor="green">
                        <th>IDProducto</th>
                        <th>Nombre</th>
                        <th>Origen</th>
                        <th>Cantidad</th>
                        <th>Costo</th>
                        <th>Datos</th> <!--for choose when otherwise-->
                    </tr>


                    <xsl:for-each select="canasta/producto">
                        <xsl:sort select="@IDProducto" order = "ascending" />
                        

                            <tr>
                                <td>
                                    <xsl:value-of select="@IDProducto" /> <!--@ for attributes-->
                                </td>
                                <td>
                                    <xsl:value-of select="nombre" />
                                </td>
                                <td>
                                    <xsl:value-of select="origen" />
                                </td>
                                <td>
                                    <xsl:value-of select="cantidad" />
                                </td>
                                <td>
                                    <xsl:value-of select="costo" />
                                </td>

                                <!--Aqui hacemos la seleccion dependiendo del valor de
                                algun nodo otherwise se usa si no se ha cumplido
                                un test anterior-->    
                                <td>
                                    <xsl:choose>
                                        <xsl:when test="origen = 'Mexico'">Nacional</xsl:when>
                                        <xsl:when test="origen = 'Italia'">Importado Europa</xsl:when>
                                        <xsl:otherwise>Importado America</xsl:otherwise>
                                    </xsl:choose>
                                </td>



                            </tr>
                        
                    </xsl:for-each>

                </table>
            </body>
        </html>

    </xsl:template>
</xsl:stylesheet>