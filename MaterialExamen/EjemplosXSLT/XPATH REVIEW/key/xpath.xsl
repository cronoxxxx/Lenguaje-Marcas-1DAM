<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
<xsl:key name = "busquedaOrigen" match = "producto" use = "origen"/>
<xsl:template match="/">

<html>
    <body>
        <table border = "1">
            <tr bgcolor = "green">
                <th>IDProducto</th>
                <th>Nombre</th>
                <th>Origen</th>
                <th>Cantidad</th>
                <th>Costo</th>
                <th>Datos</th>
            </tr>
        <xsl:for-each select="key('busquedaOrigen','Colombia')">
    <xsl:sort select ="@IDProducto"/>
            <tr>
                <td><xsl:value-of select = "@IDProducto"/></td>
                <td><xsl:value-of select = "nombre"/></td>
                <td><xsl:value-of select = "origen"/></td>
                <td><xsl:value-of select = "cantidad"/></td>
                <td><xsl:value-of select = "costo"/></td>
                <td>
                    <xsl:choose>
                        <xsl:when test="origen = 'Mexico'">Mexicano</xsl:when>
                        <xsl:when test="origen = 'Italia'">De Europa</xsl:when>
                        <xsl:otherwise>De America</xsl:otherwise>
                    </xsl:choose>
                </td>
            </tr> 
    </xsl:for-each>    
        </table>
    </body>
</html>
</xsl:template>
</xsl:stylesheet>
   